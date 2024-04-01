export const ButtonContainer = ({ data, name, activeTab, setActiveTab }) => {
    const changeContent = (index) => {
        setActiveTab(index);
    }

    return (
        <nav className={`${name}-btn-container`}>
            {data.map((element, index) => {
                switch (name) {
                    case 'destinations':
                        return <button key={index} className={`${name}-page-btn subheading-2 ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)}>
                            {element.name}
                        </button>
                    case 'crew':
                        return <button key={index} className={`${name}-page-btn text-uppercase ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)} aria-label='Show crew member'>
                            <div className='btn btn-circle btn-lg' aria-hidden='true'>
                            </div>
                        </button>
                    case 'technology':
                        return <button key={index} className={`${name}-page-btn text-uppercase ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)} aria-label='Show crew member'>
                            {index}
                        </button>
                    default:
                        return <p>Not Found</p>
                }
            })}
        </nav>
    );
}