import { NextRequest, NextResponse } from 'next/server';
import NodeGeocoder from 'node-geocoder';

const options: NodeGeocoder.Options = {
  provider: 'mapbox',

  // Optionnal depending of the providers
  apiKey: process.env.MAPBOX_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

export async function GET(request: NextRequest) {
  const address_str = request.nextUrl.searchParams.get('address');

  try {
    if (address_str) {
      const res = await geocoder.geocode(address_str);

      const json_response = {
        status: 'success',
        data: {
          cities: res,
        },
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    const error_response = {
      status: 'error',
      message: (error as Error).message,
    };

    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
