import { configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

const Adapter = ReactSixteenAdapter as any;

configure({ adapter: new Adapter() });
