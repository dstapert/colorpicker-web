// Function to fetch version number from version.txt
async function fetchVersion() {
    try {
        const response = await fetch('version.txt');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const version = await response.text();
        document.getElementById('version').textContent += version.trim();
    } catch (error) {
        console.error('Failed to fetch version:', error);
    }
}

// Fetch the version number when the page loads
document.addEventListener('DOMContentLoaded', fetchVersion);