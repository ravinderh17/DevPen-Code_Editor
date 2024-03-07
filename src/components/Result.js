// import { useState, useContext, useEffect } from 'react'
import { useContext, useEffect } from 'react'
import React from 'react'
import { Box, styled } from '@mui/material'
import { DataContext } from '../context/DataProvider'
import useLocalStorage from '../hooks/useLocalStorage'

const Container = styled(Box)`
height:50%;
`
function Result() {
    const [src, setSrc] = useLocalStorage('src', ''); 
    // const [ src, setSrc ] = useState('');
    const { html, css, js } = useContext(DataContext);

    useEffect(() => {
        const srcCode = `
          <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
          </html>
        `;
    
        const timeout = setTimeout(() => {
          setSrc(srcCode);
        }, 250);
    
        return () => clearTimeout(timeout);
      }, [html, css, js, setSrc]);

    return (
        <Container >
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />
        </Container>
    )
}


export default Result