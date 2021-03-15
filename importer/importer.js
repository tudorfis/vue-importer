
import baseComponentList from '/config/components/base-component.list.js' 
import scopedComponentList from '/config/components/scoped-component.list.js' 
import mixinsListAll from '/config/mixins.list.js' 
import hooksListAll from '/config/hooks.list.js' 

export const importBaseComponents = async app => {
    const components = await importComponents( 
        Object.keys( baseComponentList ),
        baseComponentList
    )

    for ( const componentName in components ) {
        app.component( componentName, components[ componentName ] )
    }
}

export const importComponents = async ( componentList, componentConfigList = scopedComponentList ) => {
    const components = {}

    for await ( const componentName of componentList ) {
        const importFunction = componentConfigList[ componentName ]
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

export const importMixins = async mixinsList => {
    const mixins = []

    for await ( const mixinName of mixinsList ) {
        const importFunction = mixinsListAll[ mixinName ]
        if ( !importFunction ) continue

        const { default: es6module } = await importFunction()
        mixins.push( es6module )
    }

    return mixins
}

export const importHooks = async hooksList => {
    const hooks = []

    for await ( const hookName of hooksList ) {
        const importFunction = hooksListAll[ hookName ]
        if ( !importFunction ) continue

        const { default: es6module } = await importFunction()
        hooks.push( es6module )
    }

    const setupObj = hooksList.reduce( (obj, _, index) => ({
        ...obj,
        ...hooks[ index ]()
    }), {})

    return setupObj
}
