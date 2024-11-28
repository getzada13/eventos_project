interface PaginaConviteProps {
  params: {
    alias: string;
  };
}

export default function PaginaConvite(props: PaginaConviteProps) {
  console.log("PaginaConvite", props);
  return (
    <div>
      <span>{props.params.alias}</span>
    </div>
  );
}
