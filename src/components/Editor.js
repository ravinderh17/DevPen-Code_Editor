// use state for CloseFullscreenIcon functionality
import { useState } from 'react';

import React from 'react'
import '../App.css';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import useLocalStorage from '../hooks/useLocalStorage';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Header = styled(Box)`
display: flex;
background: #060606;
color: #AAAEBC;
justify-content: space-between;
font-weight: 700;

`

const Heading = styled(Box)`
background: #1d1e22;
display : flex;
padding : 9px 12px;
`

const Container = styled(Box)`
flex-grow: 1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
background: #060606;
height: 50%;
`
function Editor({ heading, icon, color, value, onChange }) {

    // implement use state , true initially
    // const [open, setOpen] = useState(true)
    const [open, setOpen] = useLocalStorage('editorOpen', true); // Use useLocalStorage hook

    const closeIcon = open ? CloseFullscreenIcon : OpenInFullIcon

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    const toggleFullscreen = () => {
        setOpen(prevState => !prevState)
    }

    return (
        // we have 3 components in editor componnent of each 3, used 3 box component 
        <Container style={open ? null : { flexGrow: 0 }}>
            {/* header has heading, which contains 2 parts */}
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: '#000'
                        }}>

                        {icon}</Box>
                    {heading}
                </Heading>
                {/* <CloseFullscreenIcon onClick={() => setOpen(prevState => !prevState)}
                    fontSize='small'
                    style={{ alignSelf: 'center' }}
                /> */}
                    
                    {open ? (
  <CloseFullscreenIcon
    onClick={toggleFullscreen}
    fontSize='small'
    style={{ alignSelf: 'center' }}
  />
) : (
  <OpenInFullIcon
    onClick={toggleFullscreen}
    fontSize='small'
    style={{ alignSelf: 'center' }}
  />
)}


            </Header>
            <ControlledEditor
                onBeforeChange={handleChange}
                className="controlled-editor"
                value={value}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />

        </Container>
    )
}

export default Editor