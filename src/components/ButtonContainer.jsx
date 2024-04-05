export const ButtonContainer = ({ data, name, activeTab, setActiveTab }) => {
    const changeContent = (index) => {
        setActiveTab(index);
    }

    return (
        <nav className={`${name}-btn-container tab-list`}>
            {data?.map((item, index) => {
                switch (name) {
                    case 'destinations':
                        return <button key={index} className={`${name}-page-btn subheading-2 border-0 ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)}>
                            {item.name}
                        </button>
                    case 'crew':
                        return <button key={index} className={`${name}-page-btn text-uppercase dot-indicators ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)} aria-label='Show crew member'>
                            <div className='btn-circle' aria-hidden='true'>
                            </div>
                        </button>
                    case 'technology':
                        return <button key={index} className={`${name}-page-btn text-white ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)}>
                            {item.id}</button>
                    default:
                        return <p>Not Found</p>
                }
            })}
        </nav>
    );
}