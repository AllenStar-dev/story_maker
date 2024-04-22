document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('button');
    const user_prompt = document.querySelector('textarea');
    const story_block = document.querySelector('.story-block');
    
    user_prompt.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            event.preventDefault();
            generateStory();
          }
    })

    btn.addEventListener('click', async (event) => {
        event.preventDefault();
        generateStory();
    })
    
    const generateStory = async() => {
        const prompt = user_prompt.value.trim();
        if(prompt === '') return;
        const loaderBox = document.createElement('div');
        addSpinner(loaderBox);
        user_prompt.value = '';
        fetch('/getStory', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"user_prompt": prompt})
        })
        .then((res)=>res.json())
        .then((story) => {
            const li = document.createElement('li');
            li.classList.add('story');
            li.textContent = story["response"];
            story_block.removeChild(loaderBox);
            story_block.appendChild(li);
        })
    }
    function addSpinner(loaderBox){
        loaderBox.classList.add('loader-box');
        const loader = document.createElement('span');
        loader.classList.add('loader');
        loaderBox.appendChild(loader);
        story_block.appendChild(loaderBox);
    }
});
