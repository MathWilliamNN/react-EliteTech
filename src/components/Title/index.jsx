
const Title = ({children, element}) => {
    const Element = element || 'h2';
    return (
        <Element>
            {children}
        </Element>
    )
}

export default Title