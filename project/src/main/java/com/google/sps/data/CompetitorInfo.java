// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;
import com.google.auto.value.AutoValue;
/**
 * Class representing user data specific to a competition
 */
@AutoValue
public abstract class CompetitorInfo {
  public static CompetitorInfo create(
      int rank, Integer rankYesterday, String name, String email, long netWorth, long amountAvailable) {
    return new AutoValue_CompetitorInfo(rank, rankYesterday, name, email, netWorth, amountAvailable);
  }

  /** The current ranking of the user in this competition based on networth */
  public abstract int rank();
  /** The rank of the user yesterday for purposes of displaying rises/falls in leaderboard */
  public abstract Integer rankYesterday();
  /** The competitor's name */
  public abstract String name();
  /** The competitor's Google email */
  public abstract String email();
  /** The networth of the competitor */
  public abstract long netWorth();
  /** The amount the user has available for additional investments */
  public abstract long amountAvailable();
}
