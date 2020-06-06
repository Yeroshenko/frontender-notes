---
title: Как я сделать темную тему в React приложении
slug: hello-world
date: 2020-06-01
postImage: images/meduza.jpg
description: hi, i am seo description
---

# Heading1

## Heading2

### Heading3

#### Heading4

##### Heading5

###### Heading6

```jsx
  class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Привет, {this.props.name}
        </div>
      )
    }
  }

  ReactDOM.render(
    <HelloMessage name='Саша' />,
    document.getElementById('hello-example')
  )
```

```html
<div>Hello World</div>
```

**bold text**

_italicized text_

> Рядом со мной те, кто рядом

- First item
- Second item
- Third item

0. First item
0. Second item
0. Third item

| Syntax    | Description | Testt | Description | Testt |
| --------- | ----------- | ----- | ----------- | ----- |
| Header    | Title       | Text  | Title       | Text  |
| Paragraph | Text        |       | Text        |       |

~~The world is flat.~~

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. [Aenean](https://www.example.com) commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Donec quam felis, `ultricies` nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.

Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.

Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.

Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,