<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
    </script>
    <button on:click={toggle}>
        <slot/>
    </button>
    <style>
        button {
            background-color: deeppink;
            color: white;
            border: none;
            border-radius: 2px;
            padding: .5rem 0.75rem;
            text-transform: uppercase;
            
        }
        :global(body.dark-mode) button {
            background-color: cyan;
            color: black;
        }
    </style>