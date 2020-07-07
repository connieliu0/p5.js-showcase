export const openLink = (url) => {
    console.log("url: ", url);
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    a.remove();
  };