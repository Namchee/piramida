import type { NextApiRequest, NextApiResponse } from 'next';
import { ValidationError } from 'apollo-server-errors';

import { getVersion } from 'scrapper/services/api/version';
import { HTTPCodes } from 'scrapper/services/api/const';


/**
 * Get data version from the API
 *
 * @param {NowRequest} req - request object
 * @param {VercelResponse} res - response object
 * @return {void}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== 'GET') {
    return res.status(405).json(undefined);
  }

  try {
    const version = await getVersion();

    return res.status(200)
      .json({
        data: {
          status: version ? 'ok' : 'not ok',
          version,
        },
        error: null,
      });
  } catch (err) {
    let status = HTTPCodes.SERVER_ERROR;

    if (err instanceof ValidationError) {
      status = HTTPCodes.INVALID_PARAMS;
    }

    return res.status(status)
      .json({
        data: null,
        error: err.message,
      });
  }
}
