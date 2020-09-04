import React from 'react';
import { Card, CardActions, CardContent, Typography, Button, IconButton } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


const QuotesGenerator = ({assignNewQuoteIndex,selectedQuoteHandler}) =>(
    <Card>
            <CardContent>
                <Typography id="text">{selectedQuoteHandler.quote}</Typography>
                <Typography id="author">{selectedQuoteHandler.author}</Typography>
            </CardContent>
            <CardActions>
                <Button id="new-quote" size='small' onClick={assignNewQuoteIndex}>New Quote</Button>
                <IconButton 
                    id="tweet-quote" 
                    target="_blank" 
                    href={encodeURI(`"twitter.com/intent/tweet?text=${selectedQuoteHandler.quote} - ${selectedQuoteHandler.author}`)}
                >
                    <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
                </IconButton>
            </CardActions>
    </Card>
    )


export default QuotesGenerator;