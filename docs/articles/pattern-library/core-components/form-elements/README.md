---
permalink: pattern-library/core-components/form-elements
title: Form Elements
$imports:
  '{ Field, Dropdown, DropdownItem, Textarea, TextareaWithoutLabel, FieldGroup, FormTheme }': '@xo-union/tk-component-fields'
  bsGrid: '@xo-union/tk-css-bootstrap/lib/grid'
  spacing: '@xo-union/tk-css-utilities/lib/spacing'

  '{ Demo, Snippet, PropTypesTable, InstallSnippet }': '#docs/doc-components'
  packageJson: '@xo-union/tk-component-fields/package.json'

  FieldMeta:                '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Field'
  DropdownMeta:             '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Dropdown'
  DropdownItemMeta:         '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/DropdownItem'
  FieldGroupMeta:           '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/FieldGroup'
  FormThemeMeta:            '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/FormTheme'
  TextareaMeta:             '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/Textarea'
  TextareaWithoutLabelMeta: '!!react-docgen-loader!@xo-union/tk-component-fields/src/components/TextareaWithoutLabel'

  FormDemo: './demos/FormDemo'
---

<h1>{$props.title}</h1>

<FormDemo />

<div className={spacing.mt4}></div>

#### Install

<InstallSnippet packageJson={packageJson} />

<div className={spacing.mt4}></div>

#### Import

```javascript
import { Field, Dropdown, DropdownItem, Textarea, FormTheme } from '@xo-union/tk-component-fields';
```

<div className={spacing.mt5}></div>

### FormTheme component

<p>{FormThemeMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <div>
    <FormTheme>
      <FieldGroup>
        <div className={bsGrid.col12}>
          <Field name="email" />
        </div>
      </FieldGroup>
    </FormTheme>

    <FormTheme name="white">
      <FieldGroup>
        <div className={bsGrid.col12}>
          <Field name="email" />
        </div>
      </FieldGroup>
    </FormTheme>
  </div>
</Demo>

<div className={spacing.mt4}></div>

##### Properties

<PropTypesTable metadata={FormThemeMeta.props} />

<div className={spacing.mt5}></div>

### Field Component

<Demo>
  <FormTheme>
    <Field name="email" />
  </FormTheme>
</Demo>

<div className={spacing.mt4}></div>

##### Properties

<PropTypesTable metadata={FieldMeta.props} />

<div className={spacing.mt4}></div>

##### Invalid State

<Demo>
  <Field name="email" state="invalid" validationMessage="Something went wrong" />
</Demo>

<div className={spacing.mt4}></div>

##### Successful State

<Demo>
  <Field name="address" state="valid" defaultValue="232 Boerum St." />
</Demo>

<div className={spacing.mt4}></div>

##### Disabled State

<Demo>
  <Field name="email" disabled />
</Demo>

<div className={spacing.mt5}></div>

### Dropdown Component

<Demo>
  <FormTheme>
    <Dropdown name="Season">
      <DropdownItem label="Winter" />
      <DropdownItem label="Spring" />
      <DropdownItem label="Summer" />
      <DropdownItem label="Fall"/>
    </Dropdown>
  </FormTheme>
</Demo>

<div className={spacing.mt5}></div>

##### Properties

<div className={spacing.mt4}></div>

##### Dropdown
<PropTypesTable metadata={DropdownMeta.props} exclude={["default"]}/>

<div className={spacing.mt4}></div>

##### DropdownItem
<PropTypesTable metadata={DropdownItemMeta.props} exclude={["default"]}/>

<div className={spacing.mt5}></div>

### FieldGroup Component

<p>{FieldGroupMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <FormTheme>
    <FieldGroup>
      <div className={bsGrid.col6}>
        <Field name="email" />
      </div>

      <div className={bsGrid.col6}>
        <Field name="domain" />
      </div>
    </FieldGroup>

    <FieldGroup>
      <div className={bsGrid.col12}>
        <Field name="password" />
      </div>
    </FieldGroup>
  </FormTheme>
</Demo>

<div className={spacing.mt4}></div>

##### Properties

<PropTypesTable metadata={FieldGroupMeta.props} exclude={["default"]} />

<div className={spacing.mt5}></div>

### Textarea Component(s)

<p>{TextareaMeta.description}</p>

<Demo cssDependencies={{ bsGrid }}>
  <FormTheme>
    <Textarea name="optional-message" />
  </FormTheme>
</Demo>

<Demo cssDependencies={{ bsGrid }}>
  <FormTheme>
    <TextareaWithoutLabel name="optional-message" placeholder="Optional message" />
  </FormTheme>
</Demo>

<div className={spacing.mt4}></div>

##### Properties

<div className={spacing.mt4}></div>

###### Textarea
<PropTypesTable metadata={TextareaMeta.props} />