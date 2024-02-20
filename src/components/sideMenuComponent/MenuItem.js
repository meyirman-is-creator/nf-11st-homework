export default function MenuItem(item) {
    return (
        <div className='d-flex my-3'>
            <div style={{ width: 30, height: 30, fontSize: 20 }}>
                {item.icon}
            </div>
            <p className='mx-3' style={{ fontSize: 20 }}>{item.name}</p>
        </div>

    )
};