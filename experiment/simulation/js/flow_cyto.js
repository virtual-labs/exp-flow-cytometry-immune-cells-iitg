let currentAnimation = 0;
const animations = Array.from({length: 9}, (_, i) => `./json/Step_${i+1}.json`);
let animationInstance = null;
let currentProcedure = null;
let videoPlayed = false;
let video = document.createElement('video');

// Create an array of all procedures
var allProcedures = [ 
    '1. 5 ml Histopaque is added to 2 tubes',
    '2. PBS is added to our chicken blood sample',        
    '3. Blood - PBS sample is added to tubes containing histopaque',
    '4. The tubes are centrifuged',
    '5. The middle layer is carefully pipetted out',
    '6. PBS is added, and tubes are centrifuged',
    '7. Bottom layer is carefully pipetted  out',
    '8. The tubes are centrifuged',
    '9. Mixing DMEM with the Final extract' ];

import { tooltips } from './tooltip.js';
import { showTooltip } from './tooltip.js';
import { hideTooltip } from './tooltip.js';

document.getElementById('prev').style.display = 'none';
document.getElementById('procedure_container').style.display = 'none';
document.getElementById('extra-button').style.display = 'none';
document.getElementById('procedure_title').style.display = 'none';

document.getElementById('start').addEventListener('click', () => {
    loadAnimation();
    document.getElementById('start').style.display = 'none';
    document.getElementById('play-all').style.display = 'inline-block';
    document.getElementById('next').style.display = 'inline-block';
    // Hide the procedure block/title and the extra button
    document.getElementById('procedure_container').style.display = 'block';
    document.getElementById('extra-button').style.display = 'block';
    document.getElementById('procedure_title').style.display = 'block';
    // Do not display the Previous button yet
});

document.getElementById('play-all').addEventListener('click', () => {
    playAllAnimations();
});


function nextAnimation() {
    // If currentAnimation has reached the second last in the animations array, change the button text to 'Show Flowcytometer functionality'
    if (currentAnimation === animations.length - 2) {
        document.getElementById('next').textContent = 'Show Flowcytometer functionality';
    }

    // If currentAnimation has reached the end of the animations array, change the button text to 'End'
    if (currentAnimation === animations.length - 1) {
        // Create a video element
        video.src = './video/flow_cyto.mp4'; // Replace with the path to your video file
        video.controls = true;
        video.style.width = '100%';
        video.style.height = 'auto';

        // Clear the animation_container and append the video element to it
        var animationContainer = document.getElementById('animation_container'); // Replace with the id of your container
        animationContainer.innerHTML = ''; // Clear the animation_container
        animationContainer.appendChild(video);             
        video.play();

        // Change the text of the button to 'End' and make it unclickable
        var nextButton = document.getElementById('next');
        nextButton.textContent = 'End';
        nextButton.disabled = true;

        videoPlayed = true; // Set videoPlayed to true when the video is played
    } else {
        currentAnimation = (currentAnimation + 1) % animations.length;  
        console.log(`Next - Loading animation ${currentAnimation}`); // Log when an animation is loaded    
        loadAnimation(); // Load and play the current animation

        // Display the 'Prev' button only when the current animation is not the first one
        if (currentAnimation !== 0) {
            document.getElementById('prev').style.display = 'inline-block';
        }
    }
}

document.getElementById('next').addEventListener('click', nextAnimation);

document.getElementById('prev').addEventListener('click', () => {
    // Check if the 'Next' button's textContent is 'End'
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    if (videoPlayed) {
        // Change the 'Next' button's textContent back to 'Show Flowcytometer functionality'
        nextButton.textContent = 'Show Flowcytometer functionality';

        // Make the 'Next' button clickable again
        nextButton.disabled = false;

        videoPlayed = false; // Set videoPlayed back to false when the 'Prev' button is clicked
    } else {
        // Decrement the currentAnimation index only if the 'Next' button does not show 'End'
        currentAnimation = (currentAnimation - 1 + animations.length) % animations.length;  

        // If the current animation is not the last one, change the 'Next' button's textContent back to 'Next'
        if (currentAnimation !== animations.length - 1) {
            nextButton.textContent = 'Next';
        }
        
        // If the current animation is the first one, hide the 'Prev' button
        if (currentAnimation === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline-block';
        }
    }

    console.log(`Prev - Loading animation ${currentAnimation}`); // Log when an animation is loaded  
    loadAnimation(); // Load and play the current animation
});

document.addEventListener('DOMContentLoaded', (event) => {
    const proceduresContainer = document.getElementById('procedure_container');

    allProcedures = allProcedures.map((procedure, index) => {
        const procedureElement = document.createElement('div');        
        procedureElement.id = `procedure-${index}`;
        procedureElement.className = 'procedure';

        const procedureText = document.createElement('span');
        procedureText.textContent = procedure;
        procedureElement.appendChild(procedureText);

        proceduresContainer.appendChild(procedureElement);
        return procedureElement;
    });
});

function loadAnimation() {
    // Hide the previous procedure
    if (currentProcedure) {
        currentProcedure.style.display = 'none';
    }

// Show the current procedure and the two procedures before and after it
allProcedures.forEach((procedure, index) => {
    if (index >= currentAnimation - 2 && index <= currentAnimation + 2) {
        procedure.style.display = 'block';
    } else {
        procedure.style.display = 'none';
    }

    if (index === currentAnimation) {
        procedure.classList.add('active');
    } else {
        procedure.classList.remove('active');
    }
}); 

    console.log(`Loading animation ${currentAnimation}`); // Log when an animation is loaded
    if(animationInstance) {
        animationInstance.destroy();
    }
    animationInstance = lottie.loadAnimation({
        container: document.getElementById('animation_container'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animations[currentAnimation]
    });
    animationInstance.setSpeed(0.75); // Reduce the speed of the animation to 75% of the original speed    
}

function playAllAnimations() {
    currentAnimation = 0;
    playAnimation(currentAnimation);
}

function playAnimation(index) {
    return new Promise((resolve, reject) => {
        loadAnimation();
        animationInstance.addEventListener('complete', () => {
            console.log(`Animation ${index} completed`); // Log when an animation completes
            resolve();
        });
    }).then(() => {
        if (currentAnimation < animations.length - 1) {
            currentAnimation++;            
            playAnimation(currentAnimation);
        }
    }).finally(() => {
        // If all animations have completed, display the 'Prev' button
        if (currentAnimation === animations.length - 1) {
            document.getElementById('prev').style.display = 'inline-block';
        }
    });
}

document.getElementById('extra-button').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('icon_container').style.display = 'block';
});

document.getElementById('close-icon-container').addEventListener('click', function() {
    document.getElementById('icon_container').style.display = 'none';
    document.getElementById('extra-button').style.display = 'block';
});

// Get the close button
var closeButton = document.getElementById('close-tooltip');

// Check if the close button exists
if (!closeButton) {
    console.error('close-tooltip not found');
} else {
    // Add an event listener to the close button
    closeButton.addEventListener('click', hideTooltip);
}