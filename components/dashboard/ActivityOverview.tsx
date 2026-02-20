import HealthcareOverview from './HealthcareOverview';
import NextAppointment from './NextAppointment';

function ActivityOverview() {
    return (
        <div className="grid lg:grid-cols-3 gap-6">
            <HealthcareOverview />
            <NextAppointment />
        </div>
    );
}
export default ActivityOverview;
