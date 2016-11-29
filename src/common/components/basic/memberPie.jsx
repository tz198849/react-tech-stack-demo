import createG2 from 'g2-react';
import { Stat } from 'g2';

const Pie = createG2(chart => {
  chart.coord('theta');
  chart.intervalStack().position(Stat.summary.proportion()).color('cut');
  chart.render();
});

export const MemberPie=React.render(
  <Pie
    data={this.state.data}
    width={this.state.width}
    height={this.state.height}
    plotCfg={this.state.plotCfg}
    ref="myChart"
  />
);
