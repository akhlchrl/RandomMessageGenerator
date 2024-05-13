// Define arrays of different pieces of data
const subjects = ['You', 'Your friend', 'Someone special', 'A stranger'];
const verbs = ['will find', 'should embrace', 'needs to explore', 'is destined for'];
const objects = ['success', 'happiness', 'new opportunities', 'adventure'];

// Function to generate a random message
function generateMessage() {
    // Randomly select one item from each array
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];

    // Construct the message
    const message = `${subject} ${verb} ${object}.`;

    return message;
}

// Display a random message
console.log(generateMessage());



