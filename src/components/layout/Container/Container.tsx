import "./_container.scss"
interface ContainerProps {
    children: React.ReactNode;
    className?:string;
}

const Container = ({children, className}: ContainerProps) => {
    return(
        <div className={`layout-container ${className || ""}`}>
            {children}
        </div>
    )
}

export default Container