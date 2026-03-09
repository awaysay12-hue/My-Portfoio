
        // Hide loading after page loads

        window.addEventListener('load', function () {
            setTimeout(function () {
                document.getElementById('loading').style.opacity = '0';
                setTimeout(function () {
                    document.getElementById('loading').style.display = 'none';
                }, 500);
            }, 1000);
        });
