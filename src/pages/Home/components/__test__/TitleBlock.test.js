import { render, screen, fireEvent } from '@testing-library/react';
import { TitleBlock } from '../TitleBlock';
import { SummaryChart } from 'src/pages/Dashboard/components/SummaryChart';


describe('TitleBlock and Summary Chart this test  acts as unit and Integration test', () => {

    test('should render the title, subtitle, and summary chart correctly', () => {
      const title = 'Dashboard';
      const subtitle = 'This is a subtitle';
      const data = [
        {
          id: 1,
          name: 'Country 1',
          continent: 'Continent 1',
          last_modified: '2022-01-01',
          total: 100,
          lgbt: 50,
          status: {
            Accepted: 30,
            Rejected: 20,
            Unknown: 50,
          },
          gender: {
            Male: 40,
            Female: 50,
            Other: 5,
            Unknown: 5,
          },
        },
        {
          id: 2,
          name: 'Country 2',
          continent: 'Continent 2',
          last_modified: '2022-01-01',
          total: 200,
          lgbt: 100,
          status: {
            Accepted: 60,
            Rejected: 40,
            Unknown: 100,
          },
          gender: {
            Male: 80,
            Female: 100,
            Other: 10,
            Unknown: 10,
          },
        },
      ];
      render(
        <TitleBlock title={title} subtitle={subtitle} data={data}>
          <SummaryChart
            data={data}
            w={600}
            h={400}
            isSummaryPage={false}
          />
        </TitleBlock>
      );
  
      const titleElement = screen.getByText(title);
      const subtitleElement = screen.getByText(subtitle);
      const chartElement = screen.getByRole('region')
  
      expect(titleElement).toBeInTheDocument();
      expect(subtitleElement).toBeInTheDocument();
      expect(chartElement).toBeInTheDocument();
    });

  });