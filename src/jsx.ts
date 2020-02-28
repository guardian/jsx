interface Attributes {
    [key: string]: string;
}

export const createElement = (type: string, props: Attributes | null, ...children: any): string => {
    // type is string, class, or function
    // props is a map of props

    // need some correction as JS has reserved words
    let attrs: string = '';
    
    if (props) {
        attrs = ' ' + Object.keys(props || {}).map(key => {
            return `${key}="${(props[key])}"`
        }).join(' ');
    }
    

    return `<${type}${attrs}>${children.join('')}</${type}>`
}
