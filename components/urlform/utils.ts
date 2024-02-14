export const listLocalStorageTinied = (setListOfUrl: Function) => {
    const list = localStorage.getItem("itiny-list-url");

    if (!list) {
        const listJson: String[] = [];
        localStorage.setItem("itiny-list-url", JSON.stringify(listJson));
        setListOfUrl(listJson);
        return;
    }

    const listJson = JSON.parse(list!) as String[];
    setListOfUrl(listJson);
};

export const handleAddHistory = (
    newURL: String,
    listOfUrl: String[],
    setListOfUrl: Function
) => {
    if (listOfUrl.includes(newURL)) return;

    const urls: String[] = [...listOfUrl, newURL];
    localStorage.setItem("itiny-list-url", JSON.stringify(urls));
    setListOfUrl(urls);
};

export const sendingURLToTiny = async (url: String) => {
    const result = await fetch("/api/url", {
        method: "POST",
        body: JSON.stringify({ url: url }),
    });
    const resultJson = await result.json();

    return resultJson;
};
