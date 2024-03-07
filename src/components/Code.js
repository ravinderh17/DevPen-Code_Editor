import { useContext } from 'react';
//components
import Editor from './Editor';

import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';

import useLocalStorage from '../hooks/useLocalStorage';

const Container = styled(Box)`
    background-color: #060606;
    height: 55%;
    display: flex;
`

function Code () {

  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    // Using useLocalStorage hook for persisting state
    const [localHtml, setLocalHtml] = useLocalStorage('html', html);
    const [localCss, setLocalCss] = useLocalStorage('css', css);
    const [localJs, setLocalJs] = useLocalStorage('js', js);
  

  return (
    <Container>
     <Editor 
        heading="HTML" 
        icon="/" 
        color="#FF3C41" 
        value={localHtml} 
        onChange={value => { setLocalHtml(value); setHtml(value); }} 
      />
      <Editor 
        heading="CSS" 
        icon="*" 
        color="#0EBEFF" 
        value={localCss} 
        onChange={value => { setLocalCss(value); setCss(value); }} 
      />
      <Editor 
        heading="JS" 
        icon="()" 
        color="#FCD000" 
        value={localJs} 
        onChange={value => { setLocalJs(value); setJs(value); }} 
      />
    </Container>
  )
}

export default Code