export interface PaginaProps {
    children: React.ReactNode;
    clasName?: string;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={''}>
            <main className={props.clasName}>
                {props.children}
            </main>
        </div>
    )
}