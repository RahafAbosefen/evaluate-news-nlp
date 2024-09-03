import { checkForURL } from './urlChecker.js';


const serverURL = 'http://localhost:8000/api';


function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;

    if (Client.checkForURL(formText)) {
        console.log("::: Form Submitted :::");

        fetchData(`${serverURL}/analyse`, { url: formText })
            .then(data => {

                const polarity = data.score_tag || 'N/A';
                const subjectivity = data.subjectivity || 'N/A';
                const text = (data.sentence_list && data.sentence_list.length > 0) ? data.sentence_list[0].text : 'No text available';

                document.getElementById('results').innerHTML = `
                <p>Polarity: ${polarity}</p>
                <p>Subjectivity: ${subjectivity}</p>
                <p>Text: ${text}</p>
            `;
            });
    } else {
        alert('Seems like an invalid URL, please try with a valid URL.');
    }
}

// Function to send data to the server
const fetchData = async (url = "", data = { url: "" }) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        console.log('Error parsing JSON:', error);
    }
};


// Export the handleSubmit function
export { handleSubmit, fetchData };

