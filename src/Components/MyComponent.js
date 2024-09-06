import myImage from '../Images/97650eb9ca880815b8c7c0a22595d7ba.jpg'


export default function MyComponent({prop1, prop2}) {
    console.log(prop1, prop2)
    return (
        <img
            src={myImage}
            alt='my Car'
            height='400'
            width='250'
        />
    )
}