import React, { useState, useEffect } from 'react';
import { random } from 'lodash';
import QuotesGenerator from './components/QuotesGenerator';
import 'typeface-roboto';
import { Grid, withStyles } from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
  }
}



function App({classes}){
  // constructor(props){
  //   super(props)
  //   this.state={
  //     quotes: [],
  //     quoteIndex : null
  //   }
  //   this.selectQuoteIndexHandler=this.selectQuoteIndexHandler.bind(this);
  //   this.assignNewQuoteIndex=this.assignNewQuoteIndex.bind(this);
  // }
  const [quotes, setQuotes] = useState([]);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      const data = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json');
      const quotes= await data.json();
      setQuotes(quotes);
      setSelectedQuoteIndex(random(0,quotes.length -1));
    }
    fetchData();
    
  },[]);



  function getSelectedQuoteHandler() {
    if(!quotes.length || !Number.isInteger(selectedQuoteIndex)) {
      return undefined;
    }
    return quotes[selectedQuoteIndex];
  }

  function selectQuoteIndexHandler() {
    if (!quotes.length) {
      return undefined;
    }
    return random(0,quotes.length -1);
  }


  function assignNewQuoteIndex(){
    setSelectedQuoteIndex(selectQuoteIndexHandler())
  }
  
  
  return (
      <Grid  className={classes.container} id="quote-box" justify='center' container='center'>
        <Grid xs={11} lg={8} item>
          {
            getSelectedQuoteHandler() ? 
                    <QuotesGenerator 
                      selectedQuoteHandler={getSelectedQuoteHandler()} 
                      assignNewQuoteIndex={assignNewQuoteIndex} 
                    />
            : null
          }
          
        </Grid>
      </Grid>
  );
} 

export default withStyles(styles)(App);
