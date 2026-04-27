export default function MainContent( {ext, toggleActive,removeExtensions} ) {
    return (
        <div className="card">
            <div className="top">
                <img src={ext.logo} alt="" />
                <div>
                    <h3>{ext.name}</h3>
                    <p>{ext.description}</p>
                </div>
            </div>

            <div className="bottom">
                <button onClick={() => removeExtensions(ext.name)}>Remove</button>
                <div 
                className={`toggle ${ext.isActive ? 'active' : ''} `}
                onClick={() => toggleActive(ext.name)} >
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}