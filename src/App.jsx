import i18n from '@dhis2/d2-i18n'
import {
    Button,
    Help,
    Input,
    Label,
    CalendarInput,
    ButtonStrip,
} from '@dhis2/ui'
import React, { useCallback } from 'react'
import classes from './App.module.css'
// './locales' will be populated after running start or build scripts
// eslint-disable-next-line import/no-unresolved, import/extensions
import './locales'

// See also IDataEntryPluginProps in Plugin.types.ts for props provided to
// this plugin
const PluginInner = (propsFromParent) => {
    const { fieldsMetadata, setFieldValue } = propsFromParent

    const handlePopulate = useCallback(() => {
        // For every field that the plugin is given access to via
        // fieldsMetadata, update that value to the name of the field
        // plus the value type
        Object.entries(fieldsMetadata).forEach(([fieldId, metadata]) => {
            setFieldValue({
                fieldId: fieldId,
                value: metadata.formName + ', value type: ' + metadata.type,
            })
        })
    }, [setFieldValue])

    const handleLog = useCallback(() => {
        // Note that this includes a couple other generic plugin props,
        // like `config`, `width`, and `resizePluginWidth`
        console.log('Props from parent:', propsFromParent)
    }, [propsFromParent])

    return (
        <div className={classes.fieldContainer}>
            <div className={classes.labelContainer}>
                <Label htmlFor={'example'} className={classes.label}>
                    {i18n.t('Example plugin')}
                </Label>
            </div>

            <div className={classes.input}>
                <div className={classes.inputContainer}>
                    <ButtonStrip>
                        <Button name="populate" onClick={handlePopulate}>
                            {i18n.t('Populate form fields')}
                        </Button>

                        <Button name="log" onClick={handleLog}>
                            {i18n.t('Log plugin props')}
                        </Button>
                    </ButtonStrip>
                </div>
            </div>
        </div>
    )
}

export default PluginInner
