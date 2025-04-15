import { registerTheme } from '@superexpert-ai/framework';
import stylesOrange from './orange.module.css';
import preview from './preview.jpg';

registerTheme({
    id: 'orange',
    description: 'Orange theme for the chat bot',
    name: 'Orange Theme',
    imagePreview: preview,
    theme: stylesOrange,
});