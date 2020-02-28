import { createElement } from './jsx';

test('renders JSX correctly', () => {
    const got = createElement('div', { class: 'foo', 'data-bar': 'bar'}, 'Lorem ipsum.');
    const want = `<div class="foo" data-bar="bar">Lorem ipsum.</div>`;
    
    expect(got).toBe(want);
});
