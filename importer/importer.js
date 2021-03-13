
import importsComponents from '../config/component.list.js' 

export const importComponents = ({ app, componentList }) => {
    return new Promise( async resolve => {
        const components = {}

        for await ( const componentName of componentList ) {
            const importFunction = importsComponents[ componentName ]
            if ( !importFunction ) continue
    
            const { default: es6module } = await importFunction()
            components[ componentName ] = es6module
        }

        if ( app ) {
            for ( const componentName in components ) {
                app.component( componentName, components[ componentName ] )
            }
        }

        resolve( components )
    })
}

export const importHtml = meta => {
    return new Promise( async resolve => {
        const templateUrl = meta.url.replace( 'js', 'html' )
        const template = await ( await fetch( templateUrl  )).text() 

        resolve( template )
    })
}