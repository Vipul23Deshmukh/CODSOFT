<!-- Add this script tag just before the closing </body> tag in your HTML -->
<script>
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if the user's preference is for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check if the user's preference is stored in local storage
    const userPrefersDarkMode = localStorage.getItem('dark-mode');

    // Set initial dark mode state based on user preferences
    if (userPrefersDarkMode === 'true' || (userPrefersDarkMode === null && prefersDarkMode)) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });
</script>
