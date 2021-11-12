import Article from './Article';
import React from 'react';
import { render, screen } from '@testing-library/react';

const testArticle = {
          id: 2,
          headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
          createdOn: '10/20/2001',
          author: "Susan Snyder",
          image: 175,
          summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
          body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
      }
test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)

});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);
    const headline = screen.queryAllByTestId('headline');
    const author = screen.queryAllByTestId('author');
    const article = screen.queryAllByTestId('article');
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(article).toBeInTheDocument();
});

// test('renders "Associated Press" when no author is given', ()=> {
//     render(<Article/>)

//     const AssociatedPress = screen.queryByText(/no author is given/i)
//     expect (AssociatedPress).toBeInTheDocument()
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
//     render(<Article  handleDelete = {deleteButton}/>)
// });

//Task List: