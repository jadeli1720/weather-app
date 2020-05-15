import React from 'react';
import DailyMetrics from './dailyMetrics';
import { Card } from 'react-bootstrap';

const DailyForcast = ({ day, loading }) => {
    // console.log("Day data", day)
    
    return (
        <div className="card-container">

            <Card className="card mb-2 p-3" >
                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                    </div>
                ) : (
                        <DailyMetrics day={day} loading={loading} />
                    )
                }
            </Card>
        </div>
    );
};

export default DailyForcast;
