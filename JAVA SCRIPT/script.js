document.addEventListener('DOMContentLoaded', () => {
    // Basic support chat functionality
    const supportButton = document.querySelector('#support-button');
    const supportChat = document.querySelector('#support-chat');

    supportButton.addEventListener('click', () => {
        supportChat.style.display = 'block';
    });
});
