import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import jsdom from 'jsdom';

function setUpDomEnvironment() {
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
    const { window } = dom;

    global.window = window;
    global.document = window.document;
};

setUpDomEnvironment();

configure({ adapter: new Adapter() });
