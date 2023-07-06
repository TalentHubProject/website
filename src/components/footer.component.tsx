export default function Footer() {
    return (
        <footer className="border-b border-white mt-auto bg-primary">
            <div className="grid grid-cols-4 gap-4">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <ul>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                </ul>
                <ul>
                    <li>Item 7</li>
                    <li>Item 8</li>
                    <li>Item 9</li>
                </ul>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                </div>
            </div>
        </footer>
    );
}