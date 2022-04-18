declare module "*.svg" {
    const contents: string;
    export default contents;
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactSVGElement;
}

declare module "*.png" {
    const contents: string;
    export default contents;
    export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactSVGElement;
}