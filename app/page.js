import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types';

const Content = ({ string, optionalBool, optionalNumber }) => {
  console.log(string, optionalBool, optionalNumber);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
        <Button className="hover:animate-accordion-down">
          <span>Button</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

Content.propTypes = {
  string: PropTypes.string.isRequired,
  optionalBool: PropTypes.bool,
  optionalNumber: PropTypes.number,
};

export default function Home() {
  return (
    <Content string="Ali Bagheri" optionalBool={false} optionalNumber={2} />
  );
}
