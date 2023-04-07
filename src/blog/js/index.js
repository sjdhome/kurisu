document.getElementById("search").addEventListener("input", (event) => {
    const postList = document.getElementById("post-list");
    const search = event.target.value.toLowerCase();
    for (const post of postList.children) {
        const title = post.getElementsByTagName("h2")[0].innerText.toLowerCase();
        if (title.indexOf(search) > -1) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    }
});
