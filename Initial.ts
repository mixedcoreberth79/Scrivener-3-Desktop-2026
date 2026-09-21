interface SensorReading {
    name: string;
    value: number;
}

class SensorMonitor {
    private readings: SensorReading[] = [];

    addReading(name: string, value: number): void {
        this.readings.push({ name, value });
    }

    highestReading(): SensorReading | null {
        if (this.readings.length === 0) {
            return null;
        }

        return this.readings.reduce((best, current) =>
            current.value > best.value ? current : best
        );
    }

    printReport(): void {
        console.log("Sensor Monitor");
        console.log("==============");

        for (const reading of this.readings) {
            console.log(`${reading.name}: ${reading.value}`);
        }

        const highest = this.highestReading();

        console.log("==============");

        if (highest) {
            console.log(`Highest Reading: ${highest.name} (${highest.value})`);
        }
    }
}

const monitor = new SensorMonitor();

monitor.addReading("Temperature", 22.8);
monitor.addReading("Humidity", 48.3);
monitor.addReading("Pressure", 1012.6);
monitor.addReading("Light", 640);

monitor.printReport();
