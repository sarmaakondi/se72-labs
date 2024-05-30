![HTML open and close tags](./html.jpg)

# Writing HTML Boilerplate Code

## Step 1: DOCTYPE Declaration

- This line specifies the document type as HTML. It's not mandatory in modern browsers but recommended for better compatibility.

```HTML
<!DOCTYPE html>
```

## Step 2: Root Element (`<html>`)

- This tag marks the beginning and end of the HTML document.

```HTML
<!DOCTYPE html>
<html>
```

## Step 3: Language Attribute

- The `lang` attribute within the `<html>` tag specifies the primary language of the document. This helps search engines and screen readers understand the content better.

```HTML
<!DOCTYPE html>
<html lang="en">
```

## Step 4: The `<head>` Section

- This section contains meta information about the document that isn't directly displayed on the webpage.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
</head>
```

## Step 5: Character Encoding (`<meta charset>`)

- This meta tag defines the character encoding used for the document. UTF-8 is the recommended encoding for modern web development.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
```

## Step 6: Viewport Meta Tag

- This meta tag helps control how the webpage is displayed on different devices. It ensures the page adjusts to various screen sizes for a better user experience.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## Step 7: Document Title (`<title>`)

- This tag specifies the title of the webpage, displayed on the browser tab and search engine results.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title Here</title>
</head>
```

## Step 8: The `<body>` Section

- This section contains the visible content of the webpage, including headings, paragraphs, images, and other elements.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title Here</title>
</head>
<body>
  </body>
</html>
```

## Step 9: Closing Tags

- Don't forget to close all the opened tags in the reverse order they were opened.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title Here</title>
</head>
<body>
  </body>
</html>
```

This is the basic HTML boilerplate code that you can use as a starting point for your web pages. You can then add your specific content and styling within the `<body>` section.
