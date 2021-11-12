import Article from './Article';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const testArticle = {
          id: 2,
          headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
          createdOn: '10/20/2001',
          author: "Susan Snyder",
          image: 175,
          summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
          body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
      }
      const testArticle2 = {
        id: 2,
        headline: "Community College of Philadelphia to require vaccines, the first public college in the region to do so.",
        createdOn: '10/20/2001',
        author: "",
        image: 175,
        summary: "The requirement, which will allow exemptions for medical and religious reasons, won’t be in place for the start of the semester.",
        body: "The Pennsylvania State System of Higher Education has said its 14 public universities, including West Chester and Cheyney, don’t have the authority to require a vaccine and would need legislation. Neither Pennsylvania State University nor Temple University, which are state-related, have required the vaccines either."
    }
test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)

});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);
    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');
    const article = screen.queryByTestId('article');
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(article).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle2}/>)

    const AssociatedPress = screen.queryByText(/Associated Press/i)
    expect(AssociatedPress).toBeInTheDocument()
});

// test('executes handleDelete when the delete button is pressed', ()=> {
//     render(<Article/>)
//     const deleteButton = screen.queryByTestId('deleteButton');
//     userEvent.click(deleteButton);
//     expect(handleDelete).toHaveBeenCalled()
// });

//Task List: