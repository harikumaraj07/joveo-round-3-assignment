import { render } from "@testing-library/react";
import { Text } from "../../Components/Text/Text";

it('renders correctly enzyme', () => {
    const {container} = render(<Text />)
  
    expect(container).toMatchSnapshot();
  });