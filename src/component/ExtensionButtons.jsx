export default function ExtensionButtons({filter, setFilter}) {
    return (
        <section>
            <h1>Extension List</h1>
            <div>
                <button onClick={() => setFilter('all')}
                        className={filter === 'all' ? 'activeBtn' : ''}>All</button>
                <button onClick={() => setFilter('active')}
                        className={filter === 'active' ? 'activeBtn' : ''}>Active</button>
                <button onClick={() => setFilter('inactive')}
                        className={filter === 'inactive' ? 'activeBtn' : ''}>Inactive</button>
            </div>
        </section>
    )
}