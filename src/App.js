function App() {
    return (
        <>
            <p>fagate test</p>
            <form
                action="/api/v1/upload"
                enctype="multipart/form-data"
                method="post"
            >
                <input type="file" name="img_files[]" accept="image/*" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
