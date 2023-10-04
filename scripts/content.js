{
    let url;

    const linksCollection = document.getElementsByTagName("a");
    const linksArr = Array.from(linksCollection);

    linksArr.forEach((linkElem) => {
        linkElem.addEventListener("mouseenter", () => {
            url = linkElem.href;
        });

        linkElem.addEventListener("mouseleave", () => {
            url = null;
        });
    });

    window.addEventListener("copy", async (e) => {
        if (url) {
            try {
                navigator.clipboard.writeText(url);
            } catch (err) {
                console.log("CopyLynx: Something went wrong", err);
            } finally {
                return;
            }
        }

        try {
            navigator.clipboard.writeText(e.clipboardData.getData());
        } catch (err) {}
    });
}
