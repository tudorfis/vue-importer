
import componentListAll from '/config/component.list.js' 

export const importAllComponents = async app => {
    const components = await importComponents( Object.keys( componentListAll ) )
    for ( const componentName in components ) {
        app.component( componentName, components[ componentName ] )
    }
}

export const importComponents = async componentList => {
    const components = {}

    for await ( const componentName of componentList ) {
        const importFunction = componentListAll[ componentName ]
        if ( !importFunction ) continue

        const { default: es6module } = await importFunction()
        components[ componentName ] = es6module
    }

    return components
}

export const importTemplate = async meta => {
    const templateUrl = meta.url.replace( 'js', 'html' )
    const template = await ( await fetch( templateUrl  )).text() 

    return template
 }